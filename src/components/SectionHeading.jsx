const SectionHeading = ({title, desc, children}) => {
    return (
        <div className="text-center">
            <p className="section-desc mb-2">{desc}</p>
            <h2 className="section-title">{title}</h2>
            {children && children}
        </div>
    );
};

export default SectionHeading;