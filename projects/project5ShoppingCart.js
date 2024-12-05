const shoppingCart = {
    items: [],

    addItem(name, price, quantity = 1){

        const standardizedName = name.toLowerCase()
      const exisitngItem = this.items.find(item => item.name === standardizedName) 
      if(exisitngItem){
        exisitngItem.quantity += quantity
      } else {
        this.items.push({name: standardizedName, price, quantity})
      }

      console.log(`${name} added to the cart.`)
    },

    removeItem(name){
        const standardizedName = name.toLowerCase()
        this.items = this.items.filter(item => item.name !== standardizedName)
        console.log(`${name} removed from the cart.`)
    },

    updateQuantity(name, newQuantity){
        const standardizedName = name.toLowerCase()
        const item = this.items.find(item => item.name === standardizedName)
        if(item){
            item.quantity = newQuantity
            console.log(`${name} quantity updated to ${newQuantity}.`)
        } else {
            console.log(`${name} is not in the cart.`)
        }
    },

    calculateTotal(){
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },

    displayCart(){
        if(this.items.length === 0){
            console.log('The cart is empty.')
        } else {
            console.log('Shopping cart:')
            this.items.forEach((item, index) => {
                console.log(`${index + 1}. ${item.name} - $${item.price} x ${item.quantity} = $${item.price * item.quantity}`)
            })
            console.log(`Total: $${this.calculateTotal()}`)
        }
    }

 
}


shoppingCart.addItem("Banana", .50, 2)


shoppingCart.removeItem("Banana")
shoppingCart.displayCart()