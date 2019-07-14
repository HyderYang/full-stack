import React from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class richEditor extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };

  }

  componentDidMount() {
    // 插件内部维护 immutable 对象 需要将 html 字符串转为 immutable信息
    const blocksFromHtml = htmlToDraft(this.props.content);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);
    this.setState({
      content:  editorState,
    })
  }

  render() {
    const initEditor = {
      localization: { locale: 'zh' },
      editorState: this.state.content,
      wrapperClassName: "my-wrapper",
      editorClassName: "my-editor-wrapper",
      onEditorStateChange: this.onEditorStateChange,
      toolbar: {
        image: {
          urlEnabled: true,
          uploadEnabled: true,
          alignmentEnabled: true,
          uploadCallback: this.editorImageUploadCallBack,
          previewImage: true,
          alt: { present: true, mandatory: true },
          inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg,'
        }
      }
    };

    return (
      <Editor{...initEditor} />
    );
  }

  // 图片上传回调
  editorImageUploadCallBack = () =>  {

  };

  // 数据变化
  onEditorStateChange = (editorState) => {
    this.setState({
      content: editorState,
      // immutable格式转为html字符串
      result: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  // 父级调用获取信息
  getContent = () => {
    return this.state.result;
  }
}

export default richEditor;
