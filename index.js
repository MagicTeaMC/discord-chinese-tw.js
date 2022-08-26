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
class 應用程式 extends Discord.Application {
    constructor(){
        super()
        return new Discord.Application()
    }
} // ^^ same reason 
class 斜線指令 extends Discord.ApplicationCommand {
    constructor(){
        super()
        return new Discord.ApplicationCommand()
    }
} // ^^ same reason
class 斜線指令管理器 extends Discord.ApplicationCommandManager {
    constructor(){
        super()
        return new Discord.ApplicationCommandManager()
    }
}

class 斜線指令權限管理器 extends Discord.ApplicationCommandPermissionsManager {
    constructor(){
        super()
        return new Discord.ApplicationCommandPermissionsManager()
    }
}

class 應用程式標誌 extends Discord.ApplicationFlags {
    constructor(){
        super()
        return new Discord.ApplicationFlags()
    }
}

class 自動完成互動 extends Discord.AutocompleteInteraction {
    constructor(){
        super()
        return new Discord.AutocompleteInteraction()
    }
}

class 基底 extends Discord.Base {
    constructor(){
        super()
        return new Discord.Base
    }
}

class 基底客戶端 extends Discord.BaseClient {
    constructor(){  
        super()
        return new Discord.BaseClient()
    }
}

class 基底斜線指令互動 extends Discord.BaseCommandInteraction {
    constructor(){
        super()
        return new Discord.BaseCommandInteraction()
    }
}

class 基底伺服器 extends Discord.BaseGuild {
    constructor(){
        super()
        return new Discord.BaseGuild()
    }
}

class 基底伺服器表情符號 extends Discord.BaseGuildEmoji {
    constructor(){
        super()
        return new Discord.BaseGuildEmoji
    }
}

class 基底伺服器表情符號管理員/*@Maoyue make it better*/ extends Discord.BaseGuildEmojiManager {
    constructor(){
        super()
        return new Discord.BaseGuildEmojiManager()
    }
}


module.exports = {
    活動,
    活動標誌,
    匿名伺服器,
    應用程式,
    斜線指令,
    斜線指令管理器,
    斜線指令權限管理器,
    應用程式標誌,
    自動完成互動,
    基底,
    基底客戶端,
    基底斜線指令互動,
    基底伺服器,
    基底伺服器表情符號,
    基底伺服器表情符號管理員
}