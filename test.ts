function solution(id_list:any, report:any, k:number) {
    var answer:any[] = new Array(id_list.length).fill(0);
    report = new Set(report);
    id_list = new Set(id_list);
    report = [...report];
    id_list = [...id_list];

    console.log(report);
    console.log(id_list);
    
    // dic에 넣을 개인 정보를 완성시킨다.
    // 개인의 아이디, 신고당한 횟수, 내가 신고한 사람을 넣는다
    // 신고당한 횟수가 넘는 사람을 구한다. 

    let mail_person:any = [];
    let report_dic:any[] = [];
    id_list.forEach(function(item:any, index:number){
        report_dic.push({
            // 당사자
            id : item,
            // 당사자가 신고한 사람 
            report_person : [],
            // 신고 받은 횟수
            warning_count : 0
        });        
    });

    report.forEach(function(item:any, index:number){
        let temp:any[] = item.split(" ");
        for(let item of report_dic) {
            if(temp[0] === item.id) {
                item.report_person = [... new Set([...item.report_person, temp[temp.length - 1]])];
                // item.report_person.push(temp[temp.length - 1]);
            }
            if(temp[temp.length - 1] === item.id) {
                item.warning_count++;
                if(item.warning_count >= k) {
                    mail_person.push(item.id);
                }
            }
        }
    });    

    report_dic.forEach(function(item:any, index:number){
        let temp = item.report_person.filter((x:number) => mail_person.includes(x));
        answer[index] = temp.length;
    })


    return answer;
}

let id_list:any = ["muzi", "frodo", "apeach", "neo"];
let report:any = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
let key:number = 2;
console.log(solution(id_list, report, key));