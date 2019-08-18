export function selectAccount(account) {
//console.log('A account has been selected:',account.accountNo);
//selection account is an action creator and it needs to return an action object
    return {type: 'ACCOUNT_SELECTED', payload: account};
}

export function selectYear(account) {
//console.log('A account has been selected:',account.accountNo);
//selection account is an action creator and it needs to return an action object
    return {type: 'YEAR_SELECTED', payload: account};
}