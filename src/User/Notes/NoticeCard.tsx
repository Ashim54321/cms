import { Blockquote } from '@mantine/core';

export default function NoticeCard(props:any) {
  return (
    <div className='Show-question'>
    <Blockquote cite={`- ${props.UserName}`}>
      {props.Note}
    </Blockquote>
    </div>
  
  );
}