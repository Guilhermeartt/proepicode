# Criado por Italo Alves - 2021
import PySimpleGUI as sg 
from bs4 import BeautifulSoup as bs
import re

# Layout
layout = [
    [sg.Text('Endereço do arquivo')], 
    [sg.Input(key='arquivo'), sg.FileBrowse()], 
    [sg.OK(), sg.Cancel('Cancelar')]
]
# Janela
janela = sg.Window('Buscar arquivo', layout)

# Dados
eventos, valores = janela.read(close=True)
file_path = (valores['arquivo'])

print (' ')

# Validacao de possiveis erros do programa
while True:
    if eventos == 'Cancelar':
        print ('Programa encerrado' + '\n')
        break

    elif len(file_path) == 0:
        print ('Nenhum arquivo selecionado' + '\n')
        break

    else:
        # Separa o endereco do arquivo para remover o "NOME" do arquivo, depois uni o endereco novamente
        path = file_path.split('/')
        file_name = path.pop()
        path = "/".join(path)
        # print(path)
        # print(file_name)
        print('Arquivo: ' + file_name)
        print('Caminho do arquivo: ' + file_path)
        # Le o arquivo
        data_file = open(file_path, 'r' 
        #, encoding='utf-8', errors='ignore'
        )
        readable = data_file.readable()
        print ('Legível: ' + str(readable))

        # Pega a extensao do arquivo
        extension = file_name.split('.')[1]

        # Validacao da extencao do arquivo selecionado, se nao for "html" encerra o programa
        if extension == 'html':
            print ('Extensão válida' + '\n')

            # METODO 1
            # usa a biblioteca BeautifulSoup para encontar e manipular elementos no codigo
            soup = bs(data_file, 'html.parser')

            # encontra e extrai os estilos e os scritps da pagina
            [x.extract() for x in soup.find_all('style')]
            [x.extract() for x in soup.find_all('script')]

            # remove todo o body e mantem apenas as tabelas
            content = soup.select('table.Ptabela')
            soup.body.extract()
            new_body = soup.new_tag('body')
            soup.html.append(new_body)

            [new_body.append(table) for table in content]

            # encontra o titulo da aula e insere no titulo da pagina
            title_aula = soup.find('p' ,'TtuloAula').get_text()
            [x.replace_with(title_aula) for x in soup.title]

            # substitui p por li
            master_li = soup.select('p.PBullets')
            first_li = soup.select('p.PBulletsCxSpFirst')
            middle_li = soup.select('p.PBulletsCxSpMiddle')
            last_li = soup.select('p.PBulletsCxSpLast')
            # print(first_li)

            list_li = master_li + first_li + middle_li + last_li

            for p in list_li:
                p.name = 'li'
                p.span.extract()

            # substitui imagem por botao
            button_img = soup.select('.txtrec img')
            button_caption = soup.select('.txtrec')

            for img in button_img:
                parent = img.find_parent("p")
                caption = parent.find_next("p")
                link = caption.get_text()
                new_a = soup.new_tag('a', href=link)
                img.name = 'button'
                img.append(new_a)
                new_a.append(img['alt'])
                del img['alt']
                del img['height']
                del img['width']
                del img['src']

            data_file.close()
            lines = soup.prettify()
            lines = lines.splitlines(True)

            # METODO 2
            html = ''
            for line in lines:
                # Passo 1
                if 'td' in line:
                    line = re.sub('width="([0-9%]*)" ', '', line)
                # Passo 2
                if 'style=' in line:
                    line = re.sub('width:([a-z0-9\.%]*);', '', line)
                # Passo 3
                if 'style=' in line:
                    line = re.sub('height:([a-z0-9\.%]*)', '', line)
                # Passo 4
                if 'class=' in line:
                    line = re.sub('CxSpFirst', '', line)
                    line = re.sub('CxSpLast', '', line)
                    line = re.sub('CxSpMiddle', '', line)
                # Passo 5
                if '<' in line:
                    line = re.sub('<!--', '', line)
                if '>' in line:
                    line = re.sub('-->', '', line)
                # Passo 6   
                if 'table' in line:
                    line = re.sub('width="115%"', 'width="100%"', line)
                    line = re.sub('width:115.0%', 'width="100%"', line)
                # Passo 7 
                if 'tr' in line:
                    line = re.sub('<tr', '<tr class="anime"', line)
                # Passo 9 
                if '</head>' in line:
                    line = re.sub('</head>', '''
                            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                            <script src="https://guilhermeartt.github.io/proepicode/cursos/scripts_cursos.js"></script>
                        </head>
                    ''', line)
                # Passo 9 
                if '<body>' in line:
                    line = re.sub('<body>', '''
                        <body>
                            <section class="proepi">
                                <div class="sidenav">
                                    <button class="toggle-side">&#9776;</button>
                                    <div id="nav" class="nav"></div>
                                </div>
                                <div class="modal">
                                    <span class="close-modal">&times;</span>
                                    <img class="modal-content" id="img-modal">
                                    <div id="caption"></div>
                                </div>
                    ''', line)
                # Passo 10
                if '</body>' in line:
                    line = re.sub('</body>', '''
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>	
                            </section>
                        </body>
                    ''', line)
                html += line

            # Indenta o código final
            soup = bs(html, 'html.parser')
            html = soup.prettify()

            # Salva o arquivo finalizado
            data_file = open(path + '/' + "RES_" + file_name, 'w+', encoding='utf-8', errors='ignore')
            data_file.write(html)            
            data_file.close()

            print ('Arquivo alterado com sucesso!' + '\n')
        else:
            print ('Extensão inválida, selecione um arquivo "html"!' + '\n')
            break
        break
