function chet()
{
    var fir = document.getElementById("First").value;
    var Yslov = document.getElementById("Ysl");
    var module = document.getElementById("Fourth").value;
    var Result = document.getElementById("Res");
    
    
    if(fir != " " && module != " ")
    {
        if(module % fir !== 0)
        {
            var Res = (fir +" *" +" x" +" =  1 "+ "(mod "+ module +")");
            Ysl.innerHTML += Res;
            for(var i = 0 ; i < module ; i++)
            {
                var Rol = fir * i;
                
                if(Rol % module == 1 )
                {
                    var Res = " x = "+ i;
                    Result.innerHTML += Res;
                }
            }
        }
        else
        {
            var Res = "Решений нет";
            Result.innerHTML += Res;
            Yslov.innerHTML = " ";
        }
    }
}