$(function(){
    $('#num-btn').click(function(){
        $('#name-container').html('');
        $('#data-container').html('');
        $('#name-btn').attr('hidden', 'hidden');
        $('#final').attr('hidden', 'hidden');
        $('#hisab').text('');
        var num=$('#num-of-person').val();
        for(var i=0;i<num;i++){
            $('#name-container').append('<lable for="person'+(i+1)+'">Enter name of person '+(i+1)+':</label><input type="text" placeholder="Enter name of person '+(i+1)+'" id="person'+(i+1)+'"/><br />');
        };
        $('#name-btn').removeAttr('hidden'); 
    });
    
    $('#name-btn').click(function(){
        $('#data-container').html('');
        $('#final').attr('hidden', 'hidden');
        $('#hisab').text('');
        var num=$('#num-of-person').val();
        for(var i=0;i<num;i++){
            $('#data-container').append('<label for="data '+(i+1)+'">Amount paid by ' + $('#person'+(i+1)+'').val() +'</label> <input type="number" placeholder="amount paid" id="data'+(i+1)+'" /><br />') 
        }
        $('#final').removeAttr('hidden');
    });
    
    $('#final').click(function(){
       var people=parseInt($('#num-of-person').val());
       var list=[];
       var pos=[];
       var neg=[];
       var sum=0;
       var p=1;
       var n=1;
       for(var i=1;i<=people;i++){
           sum=sum+parseInt($('#data'+i+'').val());
       }
       var devide=sum/people
       for(var i=1;i<=people;i++){
           var person=new Object();
           person.name=$('#person'+i+'').val();
           person.num=parseInt($('#data'+i+'').val())-devide;
           list[i]=person;
           if(person.num>=0){pos[p]=person; p++;}
           else{person.num=-person.num; neg[n]=person;n++;}
       }
       $('#hisab').text('');
          while(pos[max(pos,pos.length)].num>=0.01){
            var posmax=max(pos,pos.length);
            var negmax=max(neg,neg.length);
            if(pos[posmax].num>=neg[negmax].num){
                $('#hisab').append(neg[negmax].name+' has to give &#8377;  '+ (neg[negmax].num).toFixed()+' to ' +pos[posmax].name +'<br />');
                pos[posmax].num=pos[posmax].num-neg[negmax].num;
                neg[negmax].num=0
            }else{
                $('#hisab').append(neg[negmax].name+' has to give &#8377;  '+ (pos[posmax].num).toFixed()+' to ' +pos[posmax].name +'<br />');
                neg[negmax].num=neg[negmax].num-pos[posmax].num;
                pos[posmax].num=0;
            }
        }
        
       $('#fade').hide("10000" , function(){
          $('#hisab').removeAttr('hidden');
       });
    });
    function max(list, total){
       var maxid=1;
       for(var l=1; l<total;l++){
           if(list[l].num>=list[maxid].num){ maxid=l;}
       }
       return maxid;
    }
            
});
        
        