import { View, Text, Input, Image, BaseEventOrig, InputProps, Swiper, SwiperItem } from '@tarojs/components';
import type { QuestionnaireInfo } from '@/types/exam';
import mapNumberToLetter from '@/utils/math/mapNumberToLetter';
import '../index.scss';
import { useEffect, useState } from 'react';

/** 多选题组件 */
export default (
  obj: QuestionnaireInfo.SmallQuestion & {
    clickItem: (selectedItemList: QuestionnaireInfo.AnswerOption[]) => void;
  }
) => {
  const [isFirst, setIsFirst] = useState(true);
  const [selectedItemList, setSelectedItemList] = useState<QuestionnaireInfo.AnswerOption[]>([]);

  useEffect(() => {
    if (isFirst) return;
    obj.clickItem(selectedItemList);
  }, [selectedItemList]);

  /** 点击Item（已选中就移除，未选中就添加） */
  const toggleItemSelection = (item: QuestionnaireInfo.AnswerOption) => {
    setIsFirst(false);
    if (selectedItemList.includes(item)) {
      setSelectedItemList(selectedItemList.filter(selectedItem => selectedItem !== item));
    } else setSelectedItemList([...selectedItemList, item]);
  };

  return (
    <View className='exam-item'>
      <View className='title'>
        <Text className='type'>多选</Text>
        <Text className='txt'>{obj.quContent || '-'}</Text>
      </View>
      <View className='exam-option'>
        {obj.quAnswerList.map((item, index) => (
          <View
            className={`item ${selectedItemList.includes(item) ? 'selected' : ''}`}
            key={index}
            onClick={() => toggleItemSelection(item)}
          >
            <View className='item-left'>
              <Text className='circle'>{mapNumberToLetter(index)}</Text>
            </View>
            <View className='item-right'>{item.optionContent || '-'}</View>
          </View>
        ))}
      </View>
    </View>
  );
};
