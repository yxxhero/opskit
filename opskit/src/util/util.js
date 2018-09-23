export function getRedirectPath({type, avatar}){
	// 根据用户信息 返回跳转地址
	// user.type /boss /genius
	// user.avatar /bossinfo /geniusinfo 
	let url = (type==='boss')?'/boss': '/genius'
	if (!avatar) {
		url += 'info'
	}
	return url
}

export function getChatId(userId, targetId){
	return [userId, targetId].sort().join('_')
}

export function replaceAll(s,f,e){
    var reg=new RegExp(f,"g"); //创建正则RegExp对象   
    return s.replace(reg,e); 
}
