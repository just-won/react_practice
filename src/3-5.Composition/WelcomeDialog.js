import React from 'react'
import CustomDialog from './CustomDialog'
import Dialog from './Dialog'

const WelcomeDialog = () => {
    // return (
    //     <Dialog>
    //         <h1>Welcome</h1>
    //         <h5>Thank you!</h5>
    //     </Dialog>
    // )

    return (
        <CustomDialog title="welcome" description="Thanks"/>
    )
}

export default WelcomeDialog