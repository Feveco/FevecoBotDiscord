const {Client, MessageEmbed, MessageAttachment} = require('discord.js');
const client = new Client();

//Programa el evento ready
client.once('ready', () => {
    console.log(`Logged in as: ${client.user.tag}!`);
    client.user.setStatus("online");
    console.log(client.user.presence.status);
});
//Saluda a los nuevos miembros del Servidor
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Bienvenido! ${member} Soy el Bot administrador del canal, si necesitas ayuda escribeme un mensaje privado con el comando /iniciar`);
    console.log(channel);
})
//Escucha nuevos mensajes de los ususarios
client.on('message', message => {

    if(message.content ===  'Hola'){
        message.channel.send(`Hola, ${message.author.first_name}! Que puedo hacer por ti?`);
    }
    if(message.content ===  'Programador'){
        message.channel.send('Andrew Clark. \n clark1621@gmail.com');
    }
    if(message.content ===  '/iniciar'){
        const embed = new MessageEmbed()
        .setTitle(`Bienvenido al menu principal`)
        .setColor('GOLD')
        .setDescription(`${message.author}, Puedo responderte si me envías alguno de los siguientes comandos: \n /afiliacion \n /instagram`)
        .setThumbnail('https://burstcomputers.files.wordpress.com/2020/07/star.png')
        message.channel.send(embed);
    }
    if(message.content ===  '/afiliacion'){
        const embed = new MessageEmbed()
        .setTitle('Registro de afiliacion')
        .setColor(0x0000FF)
        .setDescription('Federación Venezolana de Coleo')
        .setFooter('Toca el nombre para ir al enlace')
        .setThumbnail('https://burstcomputers.files.wordpress.com/2020/07/form.png')
        .setURL('https://docs.google.com/forms/d/e/1FAIpQLSf_EC9a2I98oexrcF5AMb7rfzIH1nauv50NX5MAcuIMDfudCQ/viewform')
        message.channel.send(embed);
    }
    if(message.content ===  '/instagram'){
        const embed = new MessageEmbed()
        .setTitle('Instagram oficial')
        .setColor(0xFF00FF)
        .setDescription('Federación Venezolana de Coleo')
        .setFooter('@feveco_oficial')
        .setThumbnail('https://burstcomputers.files.wordpress.com/2020/06/logo-ig.png')
        .setURL('https://www.instagram.com/feveco_oficial/')
        message.channel.send(embed);
    }
})

client.login('NzM2MDY5ODE1NzAxMjA5MDk4.Xxpcbw.aLUiDZTUdfsz5yjt4ouQGl94Pto');