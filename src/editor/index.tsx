import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import Checklist from '@editorjs/checklist';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import Delimiter from '@editorjs/delimiter';
import Marker from '@editorjs/marker';
import CodeTool from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';

const editor = new EditorJS({
  holder: 'editorjs',
  placeholder: 'Você pode começar a escrever ou escolher um bloco...',

  tools: {
    header: {
      class: Header,
      shortcut: 'CMD+SHIFT+H',
      config: {
        placeholder: 'Este é um cabeçalho',
        levels: [2, 3, 4],
        defaultLevel: 2
      }
    },
    image: SimpleImage,
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
    embed: {
      class: Embed,
      inlineToolbar: true
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Adicione uma citação',
        captionPlaceholder: 'Autor da citação',
      },
    },
    delimiter: Delimiter,
    Marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },
    code: {
      class: CodeTool,
      config: {
        placeholder: 'Insira aqui seu código'
      }
    },
    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+M',
    },
  },

  // Linguagem

  i18n: {
    messages: {
      ui: {
        "blockTunes": {
          "toggler": {
            "Click to tune": "Clique para ajustar",
            "or drag to move": "ou arraste para mover"
          },
        },
        "inlineToolbar": {
          "converter": {
            "Convert to": "Converter para"
          }
        },
        "toolbar": {
          "toolbox": {
            "Add": "Adicionar"
          }
        }
      },
      toolNames: {
        "Text": "Texto",
        "Heading": "Cabeçalho",
        "List": "Lista",
        "Checklist": "Checklist",
        "Quote": "Citação",
        "Code": "Código",
        "Delimiter": "Delimitador",
        "Marker": "Marcador",
        "Bold": "Negrito",
        "Italic": "Itálico",
        "InlineCode": "Linha de Código",
      },
      tools: {
        "stub": {
          'The block can not be displayed correctly.': 'O bloco não pôde ser mostrado corretamente.'
        }
      },
      blockTunes: {
        "delete": {
          "Delete": "Excluir"
        },
        "moveUp": {
          "Move up": "Mover para cima"
        },
        "moveDown": {
          "Move down": "Mover para baixo"
        }
      },
    }
  },
});

function Editor(){
  return (
    <div id="editorjs"></div>
  );
}

export default Editor;