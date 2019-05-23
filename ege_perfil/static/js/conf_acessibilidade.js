const data = new Vue({
    el: '#acessibilidade',
    delimiters: ['${', '}'],

    data: {
        radios: '',
        painel_1: true,
        hide_conf: null
    },
    updated () {
        let d = new Date();
        let year = d.getFullYear();
        year += 1;
        d.setFullYear(year);
        let utc = d.toUTCString().replace("GMT", "UTC");
        document.cookie = `hide_config=${this.hide_conf}; expires=${utc}`;
    },
    created () {
        // console.log(document.getElementById('acessibilidade').dataset.content);
        let cookie_value = document.cookie.slice(document.cookie.indexOf("=")+1, document.cookie.indexOf(";"));
        this.hide_conf = (cookie_value === 'true');
    },
    methods: {
        avancar: function () {
            switch(this.radios) {
                case "libras":
                    // code block
                    break;
                case "audio_descricao":
                    // code block
                    break;
                case "outro":
                    this.painel_1 = !this.painel_1;
                    this.radios = "perfil";
                    break;
                case "perfil":
                    this.radios = "";
                    window.location.href = "/ege/perfil/";
                    break;
                default:
                    swal({
                      title: 'Marque uma das opções!',
                      text: '',
                      icon: 'warning',
                    });
            }
        }
    }
});