export const QuoteCq = {
    header: 'Travelling as a group? Get a Quote',
    fields: {
        name: {
            name: 'name',
            label: 'Your Name',
            validations: {
                required: true
            },
            errorMessages: {
                required: 'Name is required'
            }
        },
        contact: {
            name: 'contact',
            label: 'Contact No',
            validations: {
                required: true,
                phone: true
            },
            errorMessages: {
                required: 'Contact No is required',
                phone: 'Invalid Contact No'
            }
        },
        email: {
            name: 'email',
            label: 'Email',
            validations: {
                required: true,
                email: true
            },
            errorMessages: {
                required: 'Email is required',
                email: 'Invalid Email'
            }
        }
    },
    submitBtnText: 'SUBMIT',
    successAlert: 'We hear you! We will get back to you for planning your vacation.'
}

export const PromoBannerCq = {
    promo: 'Book now to get exciting travel deals. Upto 40% off on credit card payments',
    endsIn: 'Offer ends in'
}

export const MainCq = {
    header: 'Life is short <br></br> and the world is wide!',
    caption: 'Stay at the comfort of your homes and book a trip to travel after the post pandemic era.',
    planBtnText: 'PLAN A TRIP'
} 

export const PromoCq = {
    header: 'PLAN A TRIP',
    caption: 'Make your vacation the most <br></br> memorable one'
}