import React, { type ReactNode } from "react";
import "./index.css";

export interface CardProps {
  /** 头部标题内容，可以是字符串或节点 */
  title?: ReactNode | string;
  /** 头部右侧额外内容，比如操作按钮、标签等 */
  extra?: ReactNode | string;
  /** 主体内容区域 */
  children?: ReactNode;
  /** 底部区域内容，比如操作按钮、说明文案等 */
  footer?: ReactNode;
  /** 自定义类名，方便外部覆盖样式 */
  className?: string;
}
const defaultProps: Partial<CardProps> = {
  title: "标题",
};
const Card: React.FC<CardProps> = (props) => {
  const { title, extra, children, footer, className } = {
    ...defaultProps,
    ...props,
  };
  const rootClassName = ["card", className].filter(Boolean).join(" ");

  return (
    <div className={rootClassName}>
      {(title || extra) && (
        <div className="card-header">
          <div className="card-title">{title}</div>
          {extra && <div className="card-extra">{extra}</div>}
        </div>
      )}

      {children && <div className="card-body">{children}</div>}

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;

