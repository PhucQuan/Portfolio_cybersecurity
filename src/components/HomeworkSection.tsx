import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Calendar, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { Button } from "./ui/button";

const assignments = [
    {
        id: 1,
        title: "Chapter 2",
        description: "Demo - Practice HTML5, CSS3. Bài tập thực hành về HTML5 và CSS3 cơ bản, xây dựng giao diện web tĩnh.",
        course: "Lập Trình Web",
        deadline: "Đã hoàn thành",
        status: "completed",
        githubUrl: "https://emailapp-laptrinhweb.onrender.com/",
        tags: ["HTML5", "CSS3", "Web Design"]
    },
    {
        id: 2,
        title: "Chapter 4",
        description: "Practice HTML5, CSS3. Xây dựng form khảo sát với HTML5 và CSS3, thực hành các thẻ form và validation.",
        course: "Lập Trình Web",
        deadline: "Đã hoàn thành",
        status: "completed",
        githubUrl: "https://baitap-w2.onrender.com/survey.html",
        tags: ["HTML5", "CSS3", "Forms"]
    },
    {
        id: 3,
        title: "Chapter 6",
        description: "Practice JSPs - Reuse header, footer. Thực hành JSP với việc tái sử dụng header và footer trong ứng dụng web.",
        course: "Lập Trình Web",
        deadline: "Đã hoàn thành",
        status: "completed",
        githubUrl: "https://baitapw4-4.onrender.com",
        tags: ["JSP", "Java", "Web Components"]
    },
    {
        id: 4,
        title: "Chapter 7",
        description: "Shopping Cart Exercise - Practice Cookies. Xây dựng giỏ hàng sử dụng Cookies để lưu trữ thông tin.",
        course: "Lập Trình Web",
        deadline: "Đã hoàn thành",
        status: "completed",
        githubUrl: "https://btcart-cookie.onrender.com",
        tags: ["Cookies", "Session", "Shopping Cart"]
    },
    {
        id: 5,
        title: "Chapter 8 (EL)",
        description: "Expression Language. Thực hành sử dụng EL (Expression Language) trong JSP để truy xuất và hiển thị dữ liệu.",
        course: "Lập Trình Web",
        deadline: "Đã hoàn thành",
        status: "completed",
        githubUrl: "https://cartw6.onrender.com",
        tags: ["EL", "JSP", "Expression Language"]
    },
    {
        id: 6,
        title: "Chapter 9 (JSTL)",
        description: "Shopping Cart với JSTL. Xây dựng hệ thống giỏ hàng sử dụng JSTL (JSP Standard Tag Library).",
        course: "Lập Trình Web",
        deadline: "Đã hoàn thành",
        status: "completed",
        githubUrl: "https://shoppingcart-myw2.onrender.com/",
        tags: ["JSTL", "Shopping Cart", "JSP"]
    },
    {
        id: 7,
        title: "Chapter 12",
        description: "Practice JDBC with PostgreSQL - Practice Connection Pool. Thực hành kết nối cơ sở dữ liệu với JDBC và Connection Pool.",
        course: "Lập Trình Web",
        deadline: "Đã hoàn thành",
        status: "completed",
        githubUrl: "https://baitapc12-laptrinhweb.onrender.com",
        tags: ["JDBC", "PostgreSQL", "Connection Pool"]
    },
    {
        id: 8,
        title: "Chapter 13",
        description: "Practice JPA with PostgreSQL - Practice Entities and Entity Manager. Thực hành JPA với entities và quản lý entity.",
        course: "Lập Trình Web",
        deadline: "Đã hoàn thành",
        status: "completed",
        githubUrl: "https://baitapc12-laptrinhweb-3.onrender.com",
        tags: ["JPA", "PostgreSQL", "Entity Manager"]
    },
    {
        id: 9,
        title: "Chapter 14",
        description: "Practice Sending Email via Brevo API. Thực hành gửi email tự động sử dụng Brevo API.",
        course: "Lập Trình Web",
        deadline: "Đã hoàn thành",
        status: "completed",
        githubUrl: "https://javamail-6.onrender.com",
        tags: ["Email", "Brevo API", "Java"]
    }
];

const statusConfig = {
    completed: {
        label: "Đã Hoàn Thành",
        icon: CheckCircle2,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/30"
    },
    "in-progress": {
        label: "Đang Thực Hiện",
        icon: Clock,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30"
    },
    pending: {
        label: "Chưa Bắt Đầu",
        icon: BookOpen,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30"
    }
};

export const HomeworkSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="homework" className="py-24 relative bg-cyber-navy/20">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-cyber-purple/30 bg-cyber-purple/5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-none bg-cyber-purple animate-pulse" />
                        <span className="text-xs font-mono text-cyber-purple uppercase tracking-wider">./bai_tap</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-mono">
                        Course <span className="text-cyber-purple">Assignments</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
                        &gt; Các bài tập và dự án được thực hiện trong quá trình học tập.
                        Giáo viên có thể xem chi tiết trên GitHub.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {assignments.map((assignment, index) => {
                        const StatusIcon = statusConfig[assignment.status].icon;

                        return (
                            <motion.div
                                key={assignment.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                className="group relative rounded-none border border-cyber-gray/20 bg-cyber-surface/50 backdrop-blur-sm hover:border-cyber-purple/50 transition-all hover:shadow-purple"
                            >
                                {/* Decorative corners */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="p-6">
                                    {/* Header with status */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-2 rounded-none bg-cyber-navy border border-cyber-purple/20">
                                            <Github className="w-5 h-5 text-cyber-purple" />
                                        </div>
                                        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-none text-xs font-mono ${statusConfig[assignment.status].bg} ${statusConfig[assignment.status].border} border`}>
                                            <StatusIcon className={`w-3.5 h-3.5 ${statusConfig[assignment.status].color}`} />
                                            <span className={statusConfig[assignment.status].color}>
                                                {statusConfig[assignment.status].label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyber-purple transition-colors font-mono">
                                        {assignment.title}
                                    </h3>

                                    {/* Course */}
                                    <p className="text-xs text-cyber-neon mb-3 font-mono">
                                        📚 {assignment.course}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-mono line-clamp-3">
                                        {assignment.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {assignment.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded-none text-xs bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/20 font-mono"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Deadline */}
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 pb-4 border-b border-cyber-gray/20 font-mono">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>Hạn nộp: {assignment.deadline}</span>
                                    </div>

                                    {/* Action button */}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        asChild
                                        className="w-full rounded-none border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white font-mono transition-all"
                                    >
                                        <a href={assignment.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Xem Bài Tập
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Note for teacher */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 p-6 rounded-none border border-cyber-purple/30 bg-cyber-purple/5 backdrop-blur-sm"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-2 rounded-none bg-cyber-purple/20 border border-cyber-purple/30">
                            <BookOpen className="w-6 h-6 text-cyber-purple" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-2 font-mono">
                                Ghi Chú Cho Giáo Viên
                            </h3>
                            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                                Tất cả các bài tập đều đã được deploy lên server và có thể truy cập trực tiếp
                                qua các link được cung cấp. Cô có thể click vào nút "Xem Bài Tập" để xem
                                kết quả thực tế của từng bài tập. Mỗi bài tập đều hoạt động đầy đủ chức năng
                                và có thể test ngay trên trình duyệt.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
