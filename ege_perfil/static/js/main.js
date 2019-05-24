const page = new Vue({
    el: '#perfil',
    delimiters: ['${', '}'],

    data: {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        photo_user: 'https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png',
        edit_buttons: false,
        dialog_bio: false,
        dialog_email: false,
        switch_email: false,
        switch_needs: true,
        options_needs: false,
        selected: [],
        special_needs: [
            'Autismo',
            'Doença crônica',
            'Daltonismo',
            'Deficiência de aprendizado',
            'Doença mental',
            'Deficiência física',
            'Distúrbios da fala e da linguagem',
            'Perda auditiva e surdez',
            'Perda de memória',
            'Perda de visão e cegueira'
        ],
        recursos: null,
        cursos: [
            {
                nome: 'Tecnologia e Desenvolvimento de Software',
                codigo: '0000.0000.000-00',
                media: 7.0,
                aproveitamento: 70
            },
            {
                nome: 'Matemática financeira',
                codigo: '0000.0000.000-00',
                media: 5.0,
                aproveitamento: 50
            },
            {
                nome: 'Gestão Ambiental',
                codigo: '0000.0000.000-00',
                media: null,
                aproveitamento: 20
            }
        ],
        color_bar: []
    },
    created () {
        for (let i = 0; i <= this.cursos.length - 1; i++) {
            if (this.cursos[i].aproveitamento >= 70) { this.color_bar[i] = "success" }
            else if (this.cursos[i].aproveitamento >= 30 && this.cursos[i].aproveitamento < 70) { this.color_bar[i] = "warning" }
            else this.color_bar[i] = "error"
        }
    },
    methods: {
        save_bio: function () {
            let username = document.getElementById('perfil').dataset.content;
            let token = document.getElementById('perfil').dataset.token;
            this.dialog_bio = false;

            // this.$http.get(`api/v1/users/${username}/`)
            //     .then(response => console.log(response))
            //     .catch(error => console.log(error))

            axios({
              method: 'put',
              url: `http://localhost/ege/acesso/api/v1/users/${username}`,
              data: {biografy: document.getElementById('bio').value},
              headers: {
                Authorization: token
              }
            })
              .then(response => {
                  console.log(response)
              })
                .catch(error => console.log('put error:', error))
        },
        edit_recursos: function () {
            // axios({
            //   method: 'post',
            //   url: '/ege/perfil/acessibilidade',
            //   data: {painel_1: false}
            // })
            // .then(response => {
            //       console.log(response)
            //   })
            //     .catch(error => console.log('put error:', error))
            window.location.href = "/ege/perfil/acessibilidade?painel_1=false"
        }
    }
});

Vue.component('button_edit', {
    template: '<v-btn flat small color="white" v-on:click="show_edit_buttons">Editar dados</v-btn>',
    methods: {
        show_edit_buttons: function () {
            page.edit_buttons = !page.edit_buttons
        }
    }
});

new Vue({
    el: '#edit'
});