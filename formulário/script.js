function pegaCadastro(){
    let nome = document.getElementById("nome-cadastro").value;
    let email = document.getElementById("email-cadastro").value;
    let senha = document.getElementById("senha-cadastro").value;
    let confirmacaoSenha = document.getElementById("confirmacao-cadastro").value;
    confirmaCadastro = confirmaSenha(senha, confirmacaoSenha);
    if (confirmaCadastro == true){
        alert("Cadastro concluido, segue informações: \n" + nome + " \n" + email + "\n" + senha);
    }
}

function confirmaSenha(senha, confirmacaoSenha){
    let senhaDigitada = senha;
    let senhaConfirmar = confirmacaoSenha;
    if (senhaDigitada == senhaConfirmar){
        return true;
    }
    else{
        alert("A senha não é igual a da confirmação");
        return false;
    }
}