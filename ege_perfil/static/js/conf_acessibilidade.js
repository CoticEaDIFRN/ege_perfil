const data = new Vue({
    el: '#acessibilidade',
    delimiters: ['${', '}'],

    data: {
        radios: '',
        painel_1: true,
        hide_conf: null
    },
    created () {
        let url = new URL(window.location.href);
        if (url.searchParams.get("painel_1")) {
            // window.location.href = "/ege/perfil/acessibilidade";
            this.painel_1 = false
        }
        // console.log(document.getElementById('acessibilidade').dataset.content);
        let cookie_value = document.cookie.slice(document.cookie.indexOf("=")+1, document.cookie.indexOf(";"));
        this.hide_conf = (cookie_value === 'true');
    },
    methods: {
        create_cookie (name, value) {
            let d = new Date();
            let year = d.getFullYear();
            year += 1;
            d.setFullYear(year);
            let utc = d.toUTCString().replace("GMT", "UTC");
            document.cookie = `${name}=${value}; expires=${utc}`;
        },
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
                    this.create_cookie('hide_config', true);
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
    },
    updated () {
        this.create_cookie('hide_config', this.hide_conf);
    },
});