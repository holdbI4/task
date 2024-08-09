import React from 'react';
import CourseCard from '/src/components/Course Page/CourseCard.js';
import './CoursesPage.css';

const CoursesPage = () => {
    const courses = [
        { title: 'Введение', image: '/course1.png' },
        { title: 'Применение ИИ в жизни и бизнесе', image: '/course2.png' },
        { title: 'Инструменты и платформы ИИ', image: 'path_to_image3' },
        { title: 'Основы машинного обучения', image: 'path_to_image4' },
        { title: 'Создание простого ИИ проекта', image: 'path_to_image5' },
        { title: 'Этические аспекты и будущее ИИ', image: 'path_to_image6' },
    ];

    return (
        <div className="courses-container">
            <h1>Бесплатные курсы / Как пользоваться ИИ</h1>
            <div className="courses-grid">
                {courses.map((course, index) => (
                    <CourseCard key={index} title={course.title} image={course.image} />
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
