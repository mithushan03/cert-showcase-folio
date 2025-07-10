
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Mail, ExternalLink, Award, Calendar, Building, User, Code, Palette, Search, Database, Filter } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  institution: string;
  dateCompleted: string;
  category: 'Web Development' | 'Graphic Design' | 'SEO' | 'Virtual Assistant';
  description: string;
  skills: string[];
  verificationLink?: string;
  imageUrl?: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    institution: 'Meta (Coursera)',
    dateCompleted: 'December 2023',
    category: 'Web Development',
    description: 'Comprehensive course covering React, Node.js, databases, and full-stack application development. Built multiple projects including e-commerce platforms and social media applications.',
    skills: ['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Express.js'],
    verificationLink: 'https://coursera.org/verify/example123',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'Advanced JavaScript & ES6+',
    institution: 'Udemy',
    dateCompleted: 'October 2023',
    category: 'Web Development',
    description: 'Deep dive into modern JavaScript features, async programming, DOM manipulation, and advanced concepts like closures and prototypes.',
    skills: ['JavaScript', 'ES6+', 'Async/Await', 'DOM Manipulation', 'APIs'],
    verificationLink: 'https://udemy.com/certificate/example456'
  },
  {
    id: '3',
    title: 'Adobe Creative Suite Mastery',
    institution: 'Adobe Certified Expert',
    dateCompleted: 'September 2023',
    category: 'Graphic Design',
    description: 'Professional certification in Photoshop, Illustrator, and InDesign. Covers advanced design principles, brand identity creation, and digital artwork production.',
    skills: ['Photoshop', 'Illustrator', 'InDesign', 'Brand Design', 'Digital Art'],
    verificationLink: 'https://adobe.com/verify/example789'
  },
  {
    id: '4',
    title: 'UI/UX Design Fundamentals',
    institution: 'Google (Coursera)',
    dateCompleted: 'August 2023',
    category: 'Graphic Design',
    description: 'User-centered design principles, wireframing, prototyping, and usability testing. Created complete design systems and mobile app interfaces.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing']
  },
  {
    id: '5',
    title: 'Google Analytics & SEO Certified',
    institution: 'Google',
    dateCompleted: 'November 2023',
    category: 'SEO',
    description: 'Comprehensive SEO strategies, keyword research, technical SEO, and Google Analytics implementation. Achieved 300% traffic increase in case studies.',
    skills: ['Google Analytics', 'SEO Strategy', 'Keyword Research', 'Technical SEO', 'Content Marketing'],
    verificationLink: 'https://google.com/partners/example'
  },
  {
    id: '6',
    title: 'Advanced Data Entry & Management',
    institution: 'Microsoft Office Specialist',
    dateCompleted: 'July 2023',
    category: 'Virtual Assistant',
    description: 'Expert-level Excel functions, database management, automation with macros, and efficient data processing workflows.',
    skills: ['Excel Advanced', 'Data Analysis', 'VBA Macros', 'Database Management', 'Process Automation']
  }
];

const categoryIcons = {
  'Web Development': Code,
  'Graphic Design': Palette,
  'SEO': Search,
  'Virtual Assistant': Database
};

const categoryColors = {
  'Web Development': 'bg-blue-100 text-blue-800',
  'Graphic Design': 'bg-purple-100 text-purple-800',
  'SEO': 'bg-green-100 text-green-800',
  'Virtual Assistant': 'bg-orange-100 text-orange-800'
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(certificates.map(cert => cert.category)))];

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <User className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                S. Mithushan
              </h1>
              <p className="text-2xl font-light text-blue-100 mb-2">Professional Certificate Portfolio</p>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
                Showcasing expertise across Web Development, Graphic Design, SEO, and Virtual Assistant services
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                mithushan.netlify.app
              </Button>
            </div>
            
            <div className="flex justify-center gap-8 text-blue-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{certificates.length}</div>
                <div className="text-sm">Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{categories.length - 1}</div>
                <div className="text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2023</div>
                <div className="text-sm">Latest Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation & Filter */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Certifications
            </h2>
            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'hover:bg-blue-50 hover:border-blue-300'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate) => {
            const IconComponent = categoryIcons[certificate.category];
            return (
              <Card key={certificate.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${categoryColors[certificate.category]}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {certificate.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {certificate.title}
                  </CardTitle>
                  
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Building className="w-3 h-3" />
                      <span>{certificate.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{certificate.dateCompleted}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <CardDescription className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {certificate.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {skill}
                      </Badge>
                    ))}
                    {certificate.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        +{certificate.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-lg ${categoryColors[certificate.category]}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <DialogTitle className="text-xl font-bold text-gray-800">
                              {certificate.title}
                            </DialogTitle>
                            <Badge variant="outline" className="mt-1">
                              {certificate.category}
                            </Badge>
                          </div>
                        </div>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-gray-500" />
                            <div>
                              <div className="text-xs text-gray-500">Institution</div>
                              <div className="font-medium">{certificate.institution}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <div>
                              <div className="text-xs text-gray-500">Completed</div>
                              <div className="font-medium">{certificate.dateCompleted}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                          <DialogDescription className="text-gray-600 leading-relaxed">
                            {certificate.description}
                          </DialogDescription>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Skills & Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {certificate.skills.map((skill) => (
                              <Badge key={skill} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {certificate.verificationLink && (
                          <div className="pt-4 border-t">
                            <Button asChild className="w-full">
                              <a 
                                href={certificate.verificationLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Verify Certificate
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        {filteredCertificates.length === 0 && (
          <div className="text-center py-16">
            <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No certificates found</h3>
            <p className="text-gray-500">Try selecting a different category.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">S. Mithushan</h3>
            <p className="text-gray-400">Professional Certificate Portfolio</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Portfolio
            </Button>
          </div>
          
          <Separator className="bg-gray-800 mb-6" />
          
          <div className="text-sm text-gray-500">
            © 2024 S. Mithushan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
