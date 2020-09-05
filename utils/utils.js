
let showToast = (msg)=> {
    uni.showToast({
        title: msg,
        icon: 'none',
        duration: 2000
    });
} 

module.exports.showToast = showToast