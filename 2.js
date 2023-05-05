const a1=document.getElementById('a1')
const a2=document.getElementById('a2')
const a3=document.getElementById('a3')
const a4=document.getElementById('a4')
const s1=document.getElementById('s1')

s1.innerHTML=`<h1>+ Afirmativa:</h1><table><tr id="up">
<td><button class="button">Sujeto</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">verbo infitivo</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">complemento</button></td>
</tr><tr id="up">
<td><button class="button">We</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">go</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">to bed early.</button></td>
</tr></table><br>
<center><button class="button">We go to bed early.</button></center>
<center><button class="button-1">Nosotros nos acostamos temprano.</button></center>
<p></p>
<center><button class="button">She goes to bed early.</button></center>
<center><button class="button-1">Ella se acuesta temprano.</button></center>`


a1.addEventListener("click",()=>{
    s1.innerHTML=`<h1>+ Afirmativa:</h1><table><tr id="up">
    <td><button class="button">Sujeto</button></td>
    <td><button class="btn">+</button></td>
    <td><button class="button">verbo infitivo</button></td>
    <td><button class="btn">+</button></td>
    <td><button class="button">complemento</button></td>
    </tr><tr id="up">
    <td><button class="button">We</button></td>
    <td><button class="btn">+</button></td>
    <td><button class="button">go</button></td>
    <td><button class="btn">+</button></td>
    <td><button class="button">to bed early.</button></td>
    </tr></table><br>
    <center><button class="button">We go to bed early.</button></center>
    <center><button class="button-1">Nosotros nos acostamos temprano.</button></center>
    <p></p>
    <center><button class="button">She goes to bed early.</button></center>
    <center><button class="button-1">Ella se acuesta temprano.</button></center>`
})

a2.addEventListener("click",()=>{
    s1.innerHTML=`
    <h1>- Negativa:</h1><table><tr id="up">
<td><button class="button">Sujeto</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">do</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">not</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">verbo infitivo</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">complemento</button></td>
</tr><tr id="up">
<td><button class="button">We</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">do</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">not</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">go</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">to bed early.</button></td>
</tr></table><br>
<center><button class="button">We do not go to bed early.</button></center>
<center><button class="button-1">No nos acostamos temprano.</button></center>
<p></p>
<center><button class="button">She does not go to bed early.</button></center>
<center><button class="button-1">Ella no se acuesta temprano.</button></center>
    `
})

a3.addEventListener("click",()=>{
    s1.innerHTML=`
    <h1>? Pregunta:</h1><table><tr id="up">
<td><button class="button">Do/Does</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">sujeto</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">verbo infitivo</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">complemento</button></td>
</tr><tr id="up">
<td><button class="button">Do</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">they</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">go</button></td>
<td><button class="btn">+</button></td>
<td><button class="button">to bed early?</button></td>
</tr></table><br>
<center><button class="button">Do they go to bed early?</button></center>
<center><button class="button-1">¿Ellos se acuestan temprano?</button></center>
<p></p>
<center><button class="button">Does she go to bed early?</button></center>
<center><button class="button-1">¿Ella se acuesta temprano?</button></center>
    `
})

a4.addEventListener("click",()=>{
    s1.innerHTML=`
    <center><h1>Usage (Uso)</h1></center>

    <center><p>
    To describe habits, timetables, repeated actions or events.
    (Para describir hábitos, horarios, acciones o eventos repetidos.)
    </p></center>
    <center><button class="button-2">She usually wakes up at 6 o’clock.</button></center>
    <center><button class="button-2">Suele despertarse a las 6 en punto.</button></center>
    
    <center><p>
    To talk about general truths.
    (Hablar de verdades generales.)
    </p></center>
    <center><button class="button-2">The Sun rises in the East.</button></center>
    <center><button class="button-2">El sol sale por el este.</button></center>
    
    <center><p>
    To give instructions or directions.
    (Para dar instrucciones o direcciones.)
    </p></center>
    <center><button class="button-2">Don’t open that box. Throw it away.</button></center>
    <center><button class="button-2">No abras esa caja. Tirar a la basura.</button></center>
    
    <center><p>
    To talk about something that is fixed in the future.
    (Hablar de algo que se fija en el futuro.)
    </p></center>
    <center><button class="button-2">The bus leaves at 8 pm. Hurry up!</button></center>
    <center><button class="button-2">El bus sale a las 8 de la noche. ¡Apresúrate!</button></center>
    `
})