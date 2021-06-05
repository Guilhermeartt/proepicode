# Criado por Italo Alves - 2021
import PySimpleGUI as sg
import os
from bs4 import BeautifulSoup as bs
import re

if os.name == 'nt':
    import comtypes.client

# Layout
layout = [
    [sg.Text('Buscar arquivo (docx ou html):')],
    [sg.Input(key='arquivo'), sg.FileBrowse()],
    [sg.OK(), sg.Cancel('Cancelar')],
    #[sg.Output(size=(60, 20))],
]
# Janela
janela = sg.Window('Formatar aula', layout)

path_normalize = os.path.abspath

# Loop e validacao de possiveis erros do programa
while True:
    eventos, valores = janela.read()
    file_path = (valores['arquivo'])

    if eventos == 'Cancelar':
        print ('Programa encerrado' + '\n')
        break

    elif len(file_path) == 0:
        print ('Nenhum arquivo selecionado' + '\n')

    else:
        # Separa o endereco do arquivo para remover o "NOME" do arquivo, depois uni o endereco novamente
        path = file_path.split('/')
        file_name = path.pop()
        path = '/'.join(path) + '/'
        print('Arquivo: ' + file_name)
        print('Caminho: ' + file_path)

        # Pega a extensao e da o novo nome ao arquivo
        new_file_name = file_name.split('.')[0] + '.html'
        extension = file_name.split('.')[1]

        # Validacao da extencao do arquivo selecionado
        if (extension == 'docx' or extension == 'doc') and os.name == 'nt':
            wdFormatFilteredHTML = 10

            # Cria instancia de um objeto COM para manipular Documentos Word
            word = comtypes.client.CreateObject('Word.Application')

            # Carrega Arquivo de entrada (.docx ou .doc)
            doc = word.Documents.Open(path_normalize(path + file_name))

            # Salva arquivo de saida em formato html
            doc.SaveAs(path_normalize(path + new_file_name), FileFormat=wdFormatFilteredHTML)

            # Fecha arquivo de Entrada
            doc.Close()

            # Finaliza instancia do Objeto criado
            word.Quit()

            # Atualiza variaveis com o novo arquivo html convertido do word
            file_name = new_file_name
            extension = 'html'

        # Le o arquivo html
        data_file = open(path_normalize(path + file_name), 'r'
        #, errors='ignore', encoding='utf-8'
        )
        readable = data_file.readable()
        print ('Legível: ' + str(readable))

        if extension == 'html':
            print ('Extensão válida' + '\n')

            # METODO 1
            # usa a biblioteca BeautifulSoup para encontar e manipular elementos no codigo
            soup = bs(data_file, 'html.parser')

            # encontra e extrai os estilos e os scritps da pagina
            [x.extract() for x in soup.find_all('style')]
            [x.extract() for x in soup.find_all('script')]
            
            # remove todo o body e mantem apenas as tabelas
            #content = soup.select('table.Ptabela')
            #oup.body.extract()
            #new_body = soup.new_tag('body')
            #soup.html.append(new_body)

            #[new_body.append(table) for table in content]

            # encontra o titulo da aula e insere no titulo da pagina
            title_aula = soup.find('p' ,'TtuloAula')

            if len(title_aula) == 0:
                print('Essa aula não possui um título')
                break

            title_aula = title_aula.get_text()
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

            

            # insere botão para ocultar ou mostrar a tabela saiba mais
            
            #table_more = soup.select('.tabelaneuro')
            #i = 0

            #for table in table_more:
            #    table_id = 'saiba-mais-' + str(i)
            #    table['id'] = table_id
#
             #   new_div = soup.new_tag('div', attrs={"class": "more-button"})
             #   new_button = soup.new_tag('button', attrs={"class": "toggle-more", "target": table_id})
            #    new_button.append('Saiba Mais')
            #    new_div.append(new_button)

            #    parent_div = table.parent
            #    parent_div.insert(0, new_div)
            #    i += 1

            # substitui imagem por botao
            button_img = soup.select('.Pbutton img')
            button_caption = soup.select('.txtrec')

            if len(button_img) == 0:
                print('Essa aula não possui botões de "Saiba mais"')
                break

            for img in button_img:
                parent = img.find_parent("p")
                caption = parent.find_next("p")
                link = caption.get_text()
                new_a = soup.new_tag('a', href=link, target="_blank")
                img.name = 'button'
                img.append(new_a)
                new_a.append(img['alt'])
                del img['alt']
                del img['height']
                del img['width']
                del img['src']
            # Remove style dos span's
            #for span in soup.find_all('span'):
            #    if 'style' in span.attrs:
            #        del span.attrs['style']
             #       print(span)

            #body
            Ptabelas = soup.find_all('table','Ptabela')
            add_body = soup.new_tag('body')

            if len(Ptabelas) == 0:
                print('Essa aula não possui uma tabela principal')
                break


                    
            for Ptabela in Ptabelas:
                add_body.append(Ptabela)

            soup = add_body

            data_file.close()
            soup.prettify()
            soup.smooth()         
            lines = str(soup).splitlines(True)
            
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
                # Passo 3
                if 'height:' in line:
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
                if '<body>' in line:
                    line = re.sub('<body>', '''
                        <!doctype html>
                        <html>
                        <head>
                            <meta charset="utf-8">
                            <title>SN_AULA_01</title>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                            <script src="https://guilhermeartt.github.io/proepicode/cursos/scripts_cursos.js"></script>	
                        </head>
                        <body>
                            <div id="sidebar-nav" class="nav-sidebar nav-bar-block nav-card nav-animate-left">
                                <button id="close-nav" class="nav-bar-item nav-button">
                                    &times; Fechar
                                </button>
                            </div>
                            <section id="main" class="proepi">
                                <div class="nav-teal">
                                    <div>
                                        <button  class="nav-button nav-teal" id="open-nav">
                                            ☰ 
                                        </button>
                                    </div>
                                    <div class="nav-container">
                                        <h3>''' + title_aula + '''</h3>
                                    </div>
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

            # Indenta o código final (estava estragando alguams partes do código, tirei para funcionar)

            # soup = bs(html, 'html.parser')
            # html = soup.prettify()

            

            # Salva o arquivo finalizado
            data_file = open(path_normalize(path + "RES_" + file_name), 'w+', encoding='utf-8', errors='ignore')
            data_file.write(html)            
            data_file.close()

            print ('Aula formatada com sucesso!' + '\n')
            janela['arquivo'].Update('')
        else:
            print ('Extensão inválida ou seu sistema não suporta docx, selecione um arquivo html!' + '\n')
            janela['arquivo'].Update('')
