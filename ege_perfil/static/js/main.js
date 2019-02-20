const data = new Vue({
    el: '#perfil',
    delimiters: ['${', '}'],

    data: {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        photo_user: 'https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png',
        valueDeterminate_1: 100,
        valueDeterminate_2: 30,
        ege_profile: {
            username: '',

            is_active: '',
            is_staff: '',
            is_superuser: '',

            is_personal_email_public: '',

            biografy: '',
            is_biografy_public: '',

            valid_photo: '',
            pending_photo: '',
            solicitation_at: '',
            approved_at: '',
            approved_by: '',

            font_size: '',
            theme_skin: '',
            legends: '',
            sign_language: '',
            screen_reader: '',

            special_needs: '',
            is_special_needs_public: ''
        }
    },

    // mounted: function () {
    //    let ege_profile_json = JSON.parse(document.getElementById('perfil').dataset.content);
    //    ege_profile_json  = this.ege_profile
    // },
});