class Servidor {
    constructor(nome, espacoTotal, espacoOcupado) {
        this.nome = nome;
        this.espacoTotal = espacoTotal;
        this.espacoOcupado = espacoOcupado;
    }
}
function salvarArquivo(servidor, tamanhoArquivo) {
    if (servidor.espacoOcupado + tamanhoArquivo <= servidor.espacoTotal) {
        servidor.espacoOcupado += tamanhoArquivo; 
        return true;
    } else {
        return false; 
    }
}
const meuServidor = new Servidor('Servidor1', 100, 50); 
const tamanhoNovoArquivo = 30; 
const resultado = salvarArquivo(meuServidor, tamanhoNovoArquivo);
if (resultado) {
    console.log('Upload aceito! Novo espaço ocupado:', meuServidor.espacoOcupado, 'GB');
} else {
    console.log('Upload rejeitado! Espaço insuficiente.');
}