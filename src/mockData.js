import Mock from 'mockjs'

const testData = Mock.mock('http://localhost:8080/test','get',{
    status : 200,
    dataList: [1,2,3,4,5,6,7,8,9]
})
const loginData = Mock.mock('http://localhost:8080/login','post',function(options){
    //console.log(options);
    return options.body;
})
const lists = Mock.mock('http://localhost:8080/lists','get',{
    status : 200,
    dataList: [
        {
            title: 't1',
            body: 'b1',
            id: 'i1'
        },
        {
            title: 't2',
            body: 'b2',
            id: 'i2'
        },
        {
            title: 't3',
            body: 'b3',
            id: 'i3'
        },
        {
            title: 't4',
            body: 'b4',
            id: 'i4'
        },
        {
            title: 't5',
            body: 'b5',
            id: 'i5'
        },
        {
            title: 't11',
            body: 'b11',
            id: 'i11'
        },
        {
            title: 't22',
            body: 'b22',
            id: 'i22'
        },
        {
            title: 't33',
            body: 'b33',
            id: 'i33'
        },
        {
            title: 't44',
            body: 'b44',
            id: 'i44'
        },
        {
            title: 't55',
            body: 'b55',
            id: 'i55'
        },
        {
            title: 't111',
            body: 'b111',
            id: 'i111'
        },
        {
            title: 't222',
            body: 'b222',
            id: 'i222'
        },
        {
            title: 't333',
            body: 'b333',
            id: 'i333'
        },
        {
            title: 't444',
            body: 'b444',
            id: 'i444'
        },
        {
            title: 't555',
            body: 'b555',
            id: 'i555'
        },
    ]
})
export default {testData,loginData,lists}