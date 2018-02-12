import React from 'react';
import { AccountCard } from '@chassi-dev/chassi-react-mui-components';

class AcctTest extends React.Component {
    render(){
        return (
            <AccountCard
                action={'asdf'}
                data={{
                    accountNumber: 'ADFGSDKEUCH32E9F8SDIFUHSA84F23EIDUSNF',
                    accountName: 'Account Name',
                    accountOwners: ['Clarence Price', 'Bessie Hunt', 'Thomas Soto'],
                    accountSource: 'Google',
                    customerSupportPin: 123456,
                }}
            />
        )
    }
}
export default AcctTest;