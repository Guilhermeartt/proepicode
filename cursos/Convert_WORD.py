# Criado por Italo Alves - 2021
import PySimpleGUI as sg 
from bs4 import BeautifulSoup as bs
import re
import comtypes.client
import os
import sys

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


# Codigo correspondente ao formato .pdf
wdFormatFilteredHTML = 10

path = file_path.split('/')
path = "\\".join(path)

in_file = path

print ('aqruvio de entrada: ' + in_file)

html = path.split('.')
html[1] = "html"
html = ".".join(html)
print ('aqruvio de saida: ' + html)

out_file = html

# Cria instancia de um objeto COM para manipular Documentos Word
word = comtypes.client.CreateObject('Word.Application')

# Carrega Arquivo de entrada (.doc)
doc = word.Documents.Open(in_file)

# Salva arquivo de saida em formato .pdf
doc.SaveAs(out_file, FileFormat=wdFormatFilteredHTML)

# Fecha arquivo de Entrada
doc.Close()

# Finaliza instancia do Objeto COM criado
word.Quit()
