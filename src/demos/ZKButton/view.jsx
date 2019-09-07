import React from "react";
import { WingBlank, WhiteSpace, Toast } from "ant-design";
import ZKButton from "@components/ZKButton";
export default self => (
  <WingBlank>
    <WhiteSpace />
    <ZKButton onClick={() => self.showToast({ type: "info", content: "info" })}>
      default
    </ZKButton>
    <ZKButton disabled={true}>default disabled</ZKButton>
    <ZKButton type="primary">primary</ZKButton>
    <ZKButton type="primary" disabled={true}>
      primary disabled
    </ZKButton>
    <ZKButton type="warning" onClick={() => Toast.fail({content: "fail"})}>warning</ZKButton>
    <WhiteSpace />
    <ZKButton type="warning" disabled={true}>
      warning disabled
    </ZKButton>
    <ZKButton loading={true}>loading ZKButton</ZKButton>
    <ZKButton>无点击反馈</ZKButton>
    <ZKButton>
      custom feedback style
    </ZKButton>
    <WingBlank
      style={{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <ZKButton type="ghost">ghost</ZKButton>
      <ZKButton type="ghost" disabled={true}>
        ghost disabled
      </ZKButton>
      <ZKButton type="ghost" size="small">
        ghost
      </ZKButton>
    </WingBlank>
  </WingBlank>
);
