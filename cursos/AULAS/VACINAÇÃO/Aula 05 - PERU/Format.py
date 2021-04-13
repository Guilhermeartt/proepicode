# Criado por Ítalo Alves - 2021
import re
import PySimpleGUI as sg 
import os

z = os.getcwd()
#print (z)

#Layout
layout = [
    [sg.Text('Filename')], 
    [sg.Input(key='arquivo'), sg.FileBrowse()], 
    [sg.OK(), sg.Cancel()]
]
#Janela
janela = sg.Window('Buscar arquivo', layout)

#Dados
eventos, valores = janela.read(close=True)


name_file = (valores['arquivo'])

data_file = open(name_file, 'r')

lines = data_file.readlines()

data_file.close()

#Separa o endereço do arquvio para remover no "NOME" do aquivo, depois uni o endereço novamente.
q = name_file.split('/')
q.pop()
p ="/".join(q)
#print (p)

#Coloca o endereço do arquivo como diretorio destino
os.chdir( p )

#Separa o endeço do arquivo para adicionar o prefixo "RES_"
x = name_file.split('/')
x.reverse()
#print (x)


data_file = open("RES_" + x[0], 'w+')
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
    if 'class=' in line:
        line = re.sub('CxSpLast', '', line)
    # Passo 6
    if 'class=' in line:
        line = re.sub('CxSpMiddle', '', line)
    # Passo 7
    if '<' in line:
        line = re.sub('<!--', '', line)
    if '>' in line:
        line = re.sub('-->', '', line)

    data_file.write(line)

data_file.close()

print('\n' + 'Arquivo alterado com sucesso!' + '\n')

