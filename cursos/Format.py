# Criado por Italo Alves - 2021
import re
import PySimpleGUI as sg 
import os
from bs4 import BeautifulSoup as bs


z = os.getcwd()
# print (z)

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

name_file = (valores['arquivo'])

# Validacao de possiveis erros do programa
while True:
    if eventos == 'Cancelar':
        print ('\n' + 'programa encerrado' + '\n')
        break
    
    if len(name_file) == 0:
        
        print ('\n' + 'campo vazio' + '\n')
        break
    else:
        data_file = open(name_file, 'r' ,encoding="utf-8")


        ler = data_file.readable()
        print (ler)

        
        html = data_file
        # lines = data_file.readlines()
       
        #usar a biblioteca BeautifulSoup para encontar e manipular elementos no codigo
        soup = bs(html , 'html.parser')

        #encotrar e extrai os estilos e os scritps da pagina
        [x.extract() for x in soup.find_all('style')]
        [x.extract() for x in soup.find_all('script')]

        #encotrar o titulo da aula e insere no titulo da pagina
        title_aula = soup.find('p' ,'TtuloAula').get_text()
        [x.replace_with(title_aula) for x in soup.title]
        
        
        #text_li = soup.find("p", "PBulletsCxSpFirst").get_text()
        

        #x = [tag_li.replace_with(text_li) for tag_li in soup.select(".PBulletsCxSpFirst")]

        


        #text_li = soup.find("p", "PBulletsCxSpFirst").get_text()
        
        #new_tag = soup.new_tag('li')
        #new_tag.string = text_li
        #print (x)
        #print (text_li)
        #[x.replace_with(new_tag) for x in soup.find_all(tag_li)]
        
        #bullets = soup.find("p", "PBulletsCxSpFirst")
        #bullets = soup.find_all(['p','span','span'])
        #bullets = soup.findAll(re.compile("=(.*?)CxSpFirst"))
        #bullets = soup.find_all("PBulletsCxSpFirst")

       
        #organiza o codigo pra melhor leitura
        v = soup.prettify()

        #separa o codigo em linhas para leitura pela biblioteca re
        b = v.splitlines(True)

        lines = b

        data_file.close()

        # Separa o endereco do arquivo para remover no "NOME" do arquivo, depois uni o endereco novamente
        q = name_file.split('/')
        q.pop()
        p ="/".join(q)
        # print (p)

        # Coloca o endereco do arquivo como diretorio destino
        os.chdir( p )

        # Separa o endeco do arquivo para adicionar o prefixo "RES_"
        x = name_file.split('/')
        x.reverse()
        #'
        name_file = x[0]

        print (name_file)

        f = name_file.split('.')
        # print (f)
        


        # Validacao da exetencao do arquivo selecionado, se nao for "html" encerra o programa.
        if f[1] == 'html':
            print ('\n' + 'extenção valida!' + '\n')

            data_file = open("RES_" + name_file, 'w+',encoding="utf-8")

            for line in lines:
                # Passo 1
                if 'td' in line:
                    line = re.sub('width="([0-9%]*)" ', '', line)
                # Passo 2
                if 'style=' in line:
                    line = re.sub('width:([a-z0-9\.%]*)', '', line)
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
                    line = re.sub('</head>', """
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="https://guilhermeartt.github.io/proepicode/cursos/scripts_cursos.js"></script>	
</head>
                    """, line)
                # Passo 9 
                if '<body>' in line:
                    line = re.sub('<body>', """
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
                    """, line)
                # Passo 10
                if '</body>' in line:
                    line = re.sub('</body>', """
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
                    """, line)   
                    
                data_file.write(line)            

            data_file.close()

            print ('\n' + 'Arquivo alterado com sucesso!' + '\n')
        else:
            print ('\n' + 'extenção invalida, selecione um arquivo "html"!' + '\n')
        break
