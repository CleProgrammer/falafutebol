function copiarPix() {
    const btn = document.getElementById('btnPix');
    const chavePix = "minhachavepix"
    
    navigator.clipboard.writeText(chavePix).then(() => {
        const alertText = document.getElementById('copiedAlert');
        alertText.style.display = 'block';
        setTimeout(() => {
            alertText.style.display = 'none';
        }, 3000);
    }).catch(err => {
        alert('Não foi possível copiar automaticamente. Chave: ' + chavePix);
    });
}