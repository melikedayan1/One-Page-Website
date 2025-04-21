$(document).ready(function() {
    // Dropdown hover effect
    $('.dropdown').hover(
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
        },
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
        }
    );
    
    // Product card hover effect
    $('.product-card').hover(
        function() {
            $(this).addClass('shadow-lg');
        },
        function() {
            $(this).removeClass('shadow-lg');
        }
    );
    
    // Add to cart button click event
    $('.btn-primary').on('click', function(e) {
        e.preventDefault();
        const productName = $(this).closest('.card-body').find('.product-title').text();
        alert(`${productName} has been added to your cart!`);
    });
    
    // Wishlist button click event
    $('.btn-outline-secondary').on('click', function(e) {
        e.preventDefault();
        const productName = $(this).closest('.card-body').find('.product-title').text();
        alert(`${productName} has been added to your wishlist!`);
    });
    
    // Newsletter subscription
    $('.newsletter-form button').on('click', function() {
        const email = $('.newsletter-form input').val();
        if(email && email.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            $('.newsletter-form input').val('');
        } else {
            alert('Please enter a valid email address.');
        }
    });
    
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
}); 