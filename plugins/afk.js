let handler = async(m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.sendButton(m.chat, `
${conn.getName(m.sender)} Mulai AFK${text ? ': ' + text : ''}
`, wm, 'Siap', 'p', fake, { contextInfo: { externalAdReply :{ showAdAttribution: true,
}}})
}
handler.help = ['afk <reason>']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
