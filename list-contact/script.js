
new Vue({
    el: '#page-contatos',
    data: {
         message: 'Lista contatos',
         contact: {
             id: 0,
             name: null,
             contact: null,
             email: null,
             photo: null
         },
         index: null,
         list: []
    },
    mounted(){
        const contacts = JSON.parse(localStorage.getItem('contacts'))
        this.list = contacts ? contacts : []
    },
    methods: {
        add(){
            if(this.contact.id === 0){
                this.contact.id = this.list.length + 1
                this.list.push(this.contact)
            } else{
                this.list[this.index] = this.contact
            }
            localStorage.setItem('contacts', JSON.stringify(this.list))
            this.contact = {id: 0, name: null, contact: null, email: null, photo: null}
        },

        remove(item) {
            const idx = this.list.indexOf(item)
            this.list.splice(idx, 1)
            localStorage.setItem('contacts', JSON.stringify(this.list))
        },

        edit(item){
            this.index = this.list.indexOf(item)
			this.contact = Object.assign({}, item);
			localStorage.setItem('contacts', JSON.stringify(this.list))
        },
        
    }
})


