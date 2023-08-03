const cx = document.getElementById('cx');

let map = new Map()
map.set("curso", "Surf")
map.set(100, "Sal")
map.set("Salgado", 1000)
map.set(1, 1000)

cx.innerHTML = map.get("curso")