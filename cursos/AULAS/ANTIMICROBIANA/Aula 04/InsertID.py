#Criado por Joao Gabriel Dourado, 2020

import re
cont = 0
contTable = 0
Verify = False

name_file = raw_input('Caminho para o arquivo: ')

data_file = open(name_file, 'r')
lines = data_file.readlines()
data_file.close()

data_file = open("REV_" + name_file, 'w+')

for line in lines:
    if 'id="TituloID"' in line:   
        cont = cont + 1
    line = re.sub('TituloID', "{}{}".format('Titulo_',cont), line)
      
    data_file.write(line)  

data_file.close()

data_file_mod = open("REV_" + name_file, 'r')
lines = data_file_mod.readlines()
data_file_mod.close()

data_file_mod = open("REV_" + name_file, 'w+')

for line in lines:    
    data_file_mod.write(line)
    if '<body>' in line:
        data_file_mod.write('<section class="SN_sumario">\n')
        data_file_mod.write("<br>\n")
        data_file_mod.write('<nav id="menu">\n')
        data_file_mod.write("   <ul>\n")
        #Aqui precisa entrar o cogido dos titulos
        count = 1
        while count <= cont:
            print(count)
            data_file_mod.write('   <li><a href="{}{}">TESTE</a></li>\n'.format('#Titulo_',count))
            count += 1
        data_file_mod.write("   </ul>\n")
        data_file_mod.write("</nav>\n")
        data_file_mod.write("</section>\n")
        data_file_mod.write('<section  class="SN_sumario">\n')
        data_file_mod.write('   <div class="progress-container" >\n')
        data_file_mod.write('       <div class="progress-bar" id="myBar"></div>\n')
        data_file_mod.write("   </div>\n")
        data_file_mod.write("</section>\n")
        data_file_mod.write("\n")

data_file_mod.close()

print("\n Arquivo alterado com sucesso!\n")
