var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    report = new Set(report);
    id_list = new Set(id_list);
    report = __spreadArray([], report, true);
    id_list = __spreadArray([], id_list, true);
    // dic에 넣을 개인 정보를 완성시킨다.
    // 개인의 아이디, 신고당한 횟수, 내가 신고한 사람을 넣는다
    // 신고당한 횟수가 넘는 사람을 구한다. 
    var mail_person = [];
    var report_dic = [];
    id_list.forEach(function (item, index) {
        report_dic.push({
            // 당사자
            id: item,
            // 당사자가 신고한 사람 
            report_person: [],
            // 신고 받은 횟수
            warning_count: 0
        });
    });
    report.forEach(function (item, index) {
        var temp = item.split(" ");
        for (var _i = 0, report_dic_1 = report_dic; _i < report_dic_1.length; _i++) {
            var item_1 = report_dic_1[_i];
            if (temp[0] === item_1.id) {
                item_1.report_person = __spreadArray([], new Set(__spreadArray(__spreadArray([], item_1.report_person, true), [temp[temp.length - 1]], false)), true);
                // item.report_person.push(temp[temp.length - 1]);
            }
            if (temp[temp.length - 1] === item_1.id) {
                item_1.warning_count++;
                if (item_1.warning_count >= k) {
                    mail_person.push(item_1.id);
                }
            }
        }
    });
    report_dic.forEach(function (item, index) {
        var temp = item.report_person.filter(function (x) { return mail_person.includes(x); });
        answer[index] = temp.length;
    });
    return answer;
}
var id_list = ["muzi", "frodo", "apeach", "neo"];
var report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
var key = 2;
console.log(solution(id_list, report, key));
