import type { FC } from 'react'
import { siteConfig } from "~/config/site"
import MaxWidthWrapper from "../MaxWidthWrapper"

const Footer: FC = () => {
    return (
        <footer className="footer bg-base-200  text-base-content">
            <MaxWidthWrapper className="footer py-20 bg-base-200 text-base-content">
                {siteConfig.footer.map((f, i) => (
                    <div key={i}>
                        <span className="footer-title">{f.title}</span>
                        {f.services.map((s, i) => (
                            <a key={i} className="link link-hover">{s}</a>
                        ))}
                    </div>
                ))}
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer

