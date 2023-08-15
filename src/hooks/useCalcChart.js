import { reactive, onMounted, onBeforeUnmount, toRefs, computed,ref } from 'vue'
import { deepMerge, deepClone} from '../utils/toolUtils'
import useScreen from '../hooks/useScreen'
//匹配单词
function matchRegexAndReturn(str, pattern, callback) {
    const regex = new RegExp(`^\\b(${pattern})\\b\\(([^)]+)\\)`);
    if(typeof str !== 'string'){
        return
    }
    const match = str.match(regex);

    if (match) {
        const matchedValue = match[2];
        return callback(matchedValue);
    }
}


export default function () {
    //展示的数据  可以通过App.vue 界面去隐藏
    const {screenW,screenH } = reactive(useScreen())

    //根据指定格式的字符进行替换计算后的值,替换的格式为'w(3)'或'h(3)'
    //eg replaceOptionsSize({value:'w(3)',value2:'h(3)'),
    //return {value:6,value2:6}
    const replaceOptionsSize = computed(() => {
        return (options,isResize = true) => {
            try{
                const clonedObj = deepClone(options); // 克隆对象以避免直接修改原始对象
                function recursiveReplace(obj) {
                    for (let key in obj) {
                        if (typeof obj[key] === 'object') {
                            if (Array.isArray(obj[key])) {
                                obj[key].forEach((item, index) => {
                                    if (typeof item === 'string') {
                                        //此处可根据需要替换所需文字
                                        matchRegexAndReturn(item, 'w', value => {
                                            obj[key][index] = isResize?screenW(value):value
                                        })
                                        matchRegexAndReturn(item, 'h', value => {
                                            obj[key][index] = isResize?screenH(value):value
                                        })
                                    }else if (typeof obj[key] === 'object') {
                                        recursiveReplace(obj[key]); // 递归调用处理嵌套对象
                                    }
                                });
                            } else {
                                recursiveReplace(obj[key]); // 递归调用处理嵌套对象
                            }
                        } else if (typeof obj[key] === 'string') {
                            matchRegexAndReturn(obj[key], 'w', value => {
                                obj[key] = isResize?screenW(value):value
                            })
                            matchRegexAndReturn(obj[key], 'h', value => {
                                obj[key] = isResize?screenH(value):value
                            })
                        }
                    }
                }
                recursiveReplace(clonedObj);
                return clonedObj;   
            }catch(e){
                console.error(e)
                return {series:[]}
            }

        }
        
    })
    //现实之后调用 挂载完毕
    onMounted(() => {
    })

    //在隐藏之前调用 卸载之前
    onBeforeUnmount(() => {
    })

    return {
        replaceOptionsSize
    }
}