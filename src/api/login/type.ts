/** 账号（手机号）密码登录接口 */
export namespace NormalLogin {
  /** 账号（手机号）密码登录接口 参数 */
  export interface Params {
    /** 用户名或手机号 */
    username: string;
    /** 密码 */
    password: string;
    /** 验证码 */
    code?: string;
    /** 验证码ID */
    uuid?: string;
  }

  /** 账号（手机号）密码登录接口 结果 */
  export type Result = {
    /** 访问令牌 */
    token: string;
    /** 用户信息 */
    userInfo: {
      /** 用户ID */
      userId: number;
      /** 部门ID */
      deptId: number;
      /** 访问令牌 */
      token: string;
      /** 登录时间 */
      loginTime: number;
      /** 过期时间 */
      expireTime: number;
      /** IP地址 */
      ipaddr: string;
      /** 登录位置 */
      loginLocation: string;
      /** 浏览器 */
      browser: string;
      /** 操作系统 */
      os: string;
      /** 权限列表 */
      permissions: string[];
      /** 用户信息 */
      user: {
        /** 创建者 */
        createBy: string;
        /** 创建时间 */
        createTime: string;
        /** 更新者 */
        updateBy: string;
        /** 更新时间 */
        updateTime: string;
        /** 备注 */
        remark: string;
        /** 用户ID */
        userId: number;
        /** 部门ID */
        deptId: number;
        /** 用户名 */
        userName: string;
        /** 昵称 */
        nickName: string;
        /** 电子邮件 */
        email: string;
        /** 电话号码 */
        phonenumber: string;
        /** 性别 */
        sex: string;
        /** 头像 */
        avatar: string;
        /** 密码 */
        password: string;
        /** 状态 */
        status: string;
        /** 删除标志 */
        delFlag: string;
        /** 登录IP */
        loginIp: string;
        /** 登录日期 */
        loginDate: string;
        /** 部门信息 */
        dept: {
          /** 创建者 */
          createBy: string;
          /** 创建时间 */
          createTime: string;
          /** 更新者 */
          updateBy: string;
          /** 更新时间 */
          updateTime: string;
          /** 备注 */
          remark: string;
          /** 部门ID */
          deptId: number;
          /** 父部门ID */
          parentId: number;
          /** 部门层级关系 */
          ancestors: string;
          /** 部门名称 */
          deptName: string;
          /** 排序号 */
          orderNum: number;
          /** 部门负责人 */
          leader: string;
          /** 电话号码 */
          phone: string;
          /** 电子邮件 */
          email: string;
          /** 状态 */
          status: string;
          /** 删除标志 */
          delFlag: string;
          /** 父部门名称 */
          parentName: string;
          /** 子部门列表 */
          children: {
            /** 创建者 */
            createBy: string;
            /** 创建时间 */
            createTime: string;
            /** 更新者 */
            updateBy: string;
            /** 更新时间 */
            updateTime: string;
            /** 备注 */
            remark: string;
            /** 部门ID */
            deptId: number;
            /** 父部门ID */
            parentId: number;
            /** 部门层级关系 */
            ancestors: string;
            /** 部门名称 */
            deptName: string;
            /** 排序号 */
            orderNum: number;
            /** 部门负责人 */
            leader: string;
            /** 电话号码 */
            phone: string;
            /** 电子邮件 */
            email: string;
            /** 状态 */
            status: string;
            /** 删除标志 */
            delFlag: string;
            /** 父部门名称 */
            parentName: string;
            /** 子部门列表 */
            children: never[];
          }[];
        };
        /** 角色列表 */
        roles: {
          /** 创建者 */
          createBy: string;
          /** 创建时间 */
          createTime: string;
          /** 更新者 */
          updateBy: string;
          /** 更新时间 */
          updateTime: string;
          /** 备注 */
          remark: string;
          /** 角色ID */
          roleId: number;
          /** 角色名称 */
          roleName: string;
          /** 角色标识 */
          roleKey: string;
          /** 角色排序 */
          roleSort: number;
          /** 数据范围 */
          dataScope: string;
          /** 菜单严格检查 */
          menuCheckStrictly: boolean;
          /** 部门严格检查 */
          deptCheckStrictly: boolean;
          /** 状态 */
          status: string;
          /** 删除标志 */
          delFlag: string;
          /** 标志 */
          flag: boolean;
          /** 菜单ID列表 */
          menuIds: number[];
          /** 部门ID列表 */
          deptIds: number[];
          /** 权限列表 */
          permissions: string[];
          /** 是否为管理员 */
          admin: boolean;
        }[];
        /** 角色ID列表 */
        roleIds: number[];
        /** 岗位ID列表 */
        postIds: number[];
        /** 主要角色ID */
        roleId: number;
        /** OpenID */
        openId: string;
        /** 是否为管理员 */
        admin: boolean;
      };
      /** 权限信息列表 */
      authorities: {
        /** 权限字符串 */
        authority: string;
      }[];
      /** 密码 */
      password: string;
      /** 用户名 */
      username: string;
      /** 账户是否过期 */
      accountNonExpired: boolean;
      /** 账户是否锁定 */
      accountNonLocked: boolean;
      /** 凭证是否过期 */
      credentialsNonExpired: boolean;
      /** 是否启用 */
      enabled: boolean;
    };
  };
}

/** 退出登录接口 */
export namespace LoginOut {
  /** 退出登录接口 参数 */
  export interface Params {}

  /** 退出登录接口 结果 */
  export type Result = {};
}
