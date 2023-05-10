async function listaVideos(){
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function criarVideo(titulo, descricao,url,imagem){
    const conexao = await fetch ('http://localhost:3000/videos',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            url: url,
            imagem: imagem
        })
    })
    if (!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscarvideo(termodeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termodeBusca}`)
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}



export const conectaApi = {
    listaVideos,
    criarVideo,
    buscarvideo
}