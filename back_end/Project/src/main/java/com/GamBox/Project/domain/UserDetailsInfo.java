package com.GamBox.Project.domain;

import jakarta.persistence.*;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
public class UserDetailsInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long uId;

    @OneToOne
    @JoinColumn(name = "uId", referencedColumnName = "uId")
    private UserInfo userInfo;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    @Column(name = "account_endabled")
    private boolean enabled;

    public long getuId() {
        return uId;
    }

    public void setuId(long uId) {
        this.uId = uId;
    }

    public UserInfo getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(UserInfo userInfo) {
        this.userInfo = userInfo;
    }

    public boolean isAccountNonExpired() {
        return accountNonExpired;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public boolean isAccountNonLocked() {
        return accountNonLocked;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public boolean isCredentialsNonExpired() {
        return credentialsNonExpired;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public UserDetailsInfo(){

    }

    public UserDetailsInfo(UserInfo userInfo, boolean accountNonExpired, boolean accountNonLocked, boolean credentialsNonExpired, boolean enabled) {
        this.userInfo = userInfo;
        this.accountNonExpired = accountNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.credentialsNonExpired = credentialsNonExpired;
        this.enabled = enabled;
    }

}
