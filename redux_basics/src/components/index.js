import React, { Fragment } from 'react';
import PageLayout from '../layouts/pageLayout';
import ContentLayout from '../layouts/contentLayout';
import Navbar from '../components/navbar';
import InputForm from '../components/inputForm';
import AllImages from '../components/images';

const Gallery = () => {
    return (
        <PageLayout>
            <ContentLayout>
                <Navbar />
                <InputForm />
                <AllImages />
            </ContentLayout>
        </PageLayout>
    );
}

export default Gallery;


