### BUGS ENCONTRADOS ###

## ~ Bug 1 ~ ##
# Título: Botão de Editar não responde ao clique na página de usuários cadastrados.
- Descrição:
Ao tentar editar os dados de um usuário já cadastrado, o botão de Editar não realiza nenhuma ação quando clicado. O problema ocorre em todos os usuários cadastrados.

- Passos para Reproduzir:
Acesse a página de usuários cadastrados.
Clique no botão de Editar.
Observe que não ocorre nenhuma ação após o clique.

- Resultado Esperado:
Ao clicar no botão de Editar, o sistema deve abrir uma aba mostrando os dados do usuário e com os campos disponíveis para realizar a edição.

- Resultado Atual:
Nada acontece quando o botão de Editar é clicado. O usuário permanece na página de usuários cadastrados e nada acontece.

- Gravidade: Alta.


## ~ Bug 2 ~ ##
# Título: Botão de Exclusão responde ao clique mas não exclui os usuários cadastrados.
- Descrição: Ao clicar no botão de excluir para qualquer usuário, ele responde mostrando uma aba com a seguinte mensagem "Sucesso!Usuário deletado com sucesso!"  O problema ocorre com todos os usuários que você tenta excluir.

- Passos para Reproduzir: 
Acesse a página de usuários cadastrados.
Escolha qualquer usuário e clique no botão de Excluir.
Observe que aparece a mensagem dizendo que foi excluído com sucesso, mas no sistema o usuário permanece cadastrado.

- Resultado Esperado:
Ao clicar no botão de Excluir, o sistema deve abrir uma aba informando que foi excluído com sucesso, após a mensagem, não será possível visualizar o usuário que foi selecionado para ser excluído.

- Resultado Atual:
Nada acontece com o usuário após utilizar o botão de Excluir. Aparece a mensagem informando que foi excluído com sucesso, mas depois quando verifica no sistema o usuário permanece cadastrado.

- Gravidade: Alta.

## ~ Bug 3 ~ ##
# Título: Concluir o cadastro utilizando caracteres especiais no nome.
- Descrição: Ao concluir o cadastro do usuário com todos os campos obrigatórios preenchidos corretamente exceto o nome, pois foi preenchido utilizando caracteres especiais. É possível finalizar o cadastro com sucesso utilizando qualquer tipo de caracter especial ou número.

- Passos para Reproduzir:
Acesse a página de usuários
Clique no botão "Novo usuário"
Preencha com números e/ou caracteres especiais no campo "Nome"
Preencha os demais campos de forma correta
E clique em Salvar para finalizar o cadastro.
Observe que vai cadastrar normalmente e o nome do usuário vai ficar com números e caracteres especiais.

- Resultado Esperado:
Ao finalizar o cadastro do usuário preenchendo com números e/ou caracteres especiais no campo "Nome", deverá aparecer uma mensagem de erro dizendo que não é possível finalizar o cadastro devido ao formato inválido.

- Resultado Atual:
É possível concluir o cadastro do usuário no qual o campo "Nome" está preenchido com números e/ou caracteres especiais.

- Gravidade: Alta.

## ~ Bug 4 ~ ##
# Título: Concluir o cadastro utilizando formato inválido no campo "Telefone".
- Descrição: Ao concluir o cadastro do usuário com todos os campos obrigatórios preenchidos corretamente exceto a Telefone, pois foi preenchido utilizando letras. É possível finalizar o cadastro com sucesso utilizando qualquer tipo letra.

- Passos para Reproduzir:
Acesse a página de usuários
Clique no botão "Novo usuário"
Preencha com letras no campo "Telefone"
Preencha os demais campos de forma correta
E clique em Salvar para finalizar o cadastro.
Observe que vai cadastrar normalmente e o Telefone do usuário vai ficar salvo com letras.

- Resultado Esperado:
Ao finalizar o cadastro do usuário preenchendo com letras no campo "Telefone", deverá aparecer uma mensagem de erro dizendo que não é possível finalizar o cadastro devido ao formato inválido.

- Resultado Atual:
É possível concluir o cadastro do usuário no qual o campo "Telefone" está preenchido com letras.

- Gravidade: Alta.

## ~ Bug 5 ~ ##
# Título: Concluir o cadastro utilizando um Email sem domínio.
- Descrição: Ao concluir o cadastro do usuário com todos os campos obrigatórios preenchidos corretamente exceto a Email, pois foi preenchido sem o domínio. É possível finalizar o cadastro com sucesso sem exijir o @.

- Passos para Reproduzir:
Acesse a página de usuários
Clique no botão "Novo usuário"
Preencha sem o @ o campo "Email"
Preencha os demais campos de forma correta
E clique em Salvar para finalizar o cadastro.
Observe que vai cadastrar normalmente e o Email do usuário vai ficar salvo sem o @.

- Resultado Esperado:
Ao finalizar o cadastro do usuário preenchendo sem o @ no campo de Email, deverá aparecer uma mensagem de erro dizendo que não é possível finalizar o cadastro devido ao formato inválido.

- Resultado Atual:
É possível concluir o cadastro do usuário no qual o campo "Email" está sendo preenchido sem o @.

- Gravidade: Alta.