
 
 
 
 function updateQuantity(change) {
            const quantityElement = document.querySelector('.quantity');
            let currentQuantity = parseInt(quantityElement.textContent);
            currentQuantity = Math.max(1, currentQuantity + change);
            quantityElement.textContent = currentQuantity;
            
            // Update subtotal and total
            const pricePerItem=23.99;
            const subtotal = (currentQuantity * pricePerItem);
            document.querySelector('.subtotal').textContent = subtotal + '$';
           
          
            // Recalculate total (subtotal + shipping - discount)
            const shipping = 4.99;
            const discount = 3.99;
            const total = (parseFloat(subtotal) + shipping - discount) ;
            document.querySelector('.total-amount').textContent = '$' + total;
        
        }
