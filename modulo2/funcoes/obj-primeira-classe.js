//callback

function fn(cb) {
    console.log("executar ação de callback")
    console.log(typeof cb);
    typeof cb === "functioncb" && cb()
}

fn()