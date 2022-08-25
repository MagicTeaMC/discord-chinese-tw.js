const Discord = require('discord.js')
class 活動 extends Discord.Activity {
    constructor(){
        super()
        return new Discord.Activity()
    }
} // I think this don't need to translate because it can't use by the user
class 活動標誌 extends Discord.ActivityFlags {
    constructor(bits) {
        super()
        const returning = new Discord.ActivityFlags(bits)
        returning.位元欄 = returning.bitfield
        returning.標誌 = returning.FLAGS
        returning.增加 = returning.add
        returning.任何 = returning.any
        returning.等於 = returning.equals
        returning.凍結 = returning.freeze
        returning.有 = returning.has
        returning.沒有 = returning.missing
        returning.移除 = returning.remove
        returning.連載 = returning.serialize
        returning.轉換為Array = returning.toArray
        return returning
    }
}
class 匿名伺服器 extends Discord.AnonymousGuild {
    constructor(){
        super()
        return new Discord.AnonymousGuild()
    }
} // I think this don't need to translate too
module.exports = {
    活動,
    活動標誌,
    匿名伺服器
}