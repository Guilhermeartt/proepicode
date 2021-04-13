# Criado por Ítalo Alves - 2021
import re

name_file = input('Caminho para o arquivo: ')
data_file = open(name_file, 'r')

lines = data_file.readlines()

data_file.close()

data_file = open("RES_" + name_file.split('/')[1], 'w+')

for line in lines:
    # Passo 1
    if 'td' in line:
        line = re.sub('width="([0-9%]*)" ', '', line)
    # Passo 2
    if 'style=' in line:
        line = re.sub('width:([a-z0-9\.%]*;)', '', line)
    # Passo 3
    if 'style=' in line:
        line = re.sub('height:([a-z0-9\.%]*;)', '', line)
    # Passo 4
    if 'class=' in line:
        line = re.sub('CxSpFirst', '', line)
    # Passo 5
    if '<' in line:
        line = re.sub('<!--', '', line)
    if '>' in line:
        line = re.sub('-->', '', line)

    data_file.write(line)

data_file.close()

print('\n' + 'Arquivo alterado com sucesso!' + '\n')

