
let num = document.querySelector('input#num')
let list = document.querySelector('select#list')
let res = document.querySelector('div#res')
let values = []

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function addNumber() {
  if (isNumber(num.value) && !inList(num.value, values)) {
    values.push(Number(num.value))
    
    let option = document.createElement('option')
    option.text = `Valor ${num.value} adicionado.`
    list.appendChild(option)
    res.innerHTML = ''
  } else {
    alert('Valor inválido ou já encontrado na lista.')
  }
  num.value = ''
  num.focus()
  
}


function showResults() {
  if (values.length == 0) {
    alert('Adicione valores antes de finalizar!')
  } else {
    let tot = values.length
    let bigger = values[0]
    let smaller = values[0]
    let sum = 0
    let average = 0
    for(let p in values) {
      sum += values[p]
      if (values[p] > bigger) {
        bigger = values[p]
      }
      if (values[p] < smaller) {
        smaller = values[p] 
      }
    }
    average = sum / tot
    
    res.innerHTML = ''
    res.innerHTML += `<p>No total, tivemos <strong>${tot}</strong> valores cadastrados</p>`
    res.innerHTML += `<p>O maior valor digitado foi <strong>${bigger}</strong></p>`
    res.innerHTML += `<p>O menor valor digitado foi <strong>${smaller}</strong></p>`
    res.innerHTML += `<p>A soma de todos os valores é igual a <strong>${sum.toFixed(2)}</strong> </p>`
    res.innerHTML += `<p>A média de todos os valores é igual a <strong>${average.toFixed(2)}</strong> </p>`
  }
}

function clearList() {
  if (values.length === 0 && list.options.length === 0) {
    alert('Nada para limpar!')
  } else {
    values = []
    list.innerHTML = ''
    res.innerHTML = '<p><em>Lista limpa com sucesso!</em></p>'
    setTimeout(() => res.innerHTML = '', 2000)
    num.value = ''
    num.focus()
  }
}

num.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    addNumber()
  }
})